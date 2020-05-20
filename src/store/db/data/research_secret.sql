-- первичный импорт всего, что уже было в vikplan.com
with research as (
select research.slug, research.[name] from
  openrowset(bulk N'C:\Sources\vikplan.com\src\store\db\research_list.json', single_nclob) AS json
  cross apply openjson(BulkColumn)
  with (slug varchar(25), [name] nvarchar(250)) AS research
)
, levels as (
select research_level.* from
 openrowset(bulk N'C:\Sources\vikplan.com\src\store\db\research.json', single_nclob) as json
 cross apply openjson(BulkColumn)
 with (id int, slug varchar(25), [name] nvarchar(250), level int, food bigint, lumber bigint, iron bigint, stone bigint, silver bigint, gold int, scroll int, time_days int, time_seconds int, effect_value varchar(10), effect_name nvarchar(250), oracle int, req1 nvarchar(250), req2 nvarchar(250), req3 nvarchar(250), req4 nvarchar(250), inf int) AS research_level
)
--insert into research_level
select levels.id, levels.slug, isnull(levels.[name], research.[name]) as [name], levels.[level], levels.food, levels.lumber, levels.iron, levels.stone, levels.silver, levels.gold, levels.scroll, levels.time_days, levels.time_seconds, levels.effect_value, levels.effect_name, levels.oracle, levels.req1, levels.req2, levels.req3, levels.req4, levels.inf
from levels
left join research on research.slug = levels.slug

-- хранилище знаний
create table research_level (
	id int, slug varchar(25), [name] nvarchar(250), level int, food bigint, lumber bigint, iron bigint, stone bigint, silver bigint, gold int, scroll int, time_days int, time_seconds int, effect_value varchar(10), effect_name nvarchar(250), oracle int, req1 nvarchar(250), req2 nvarchar(250), req3 nvarchar(250), req4 nvarchar(250), inf int
)
go
truncate table research_level
go

-- буферная таблица для импорта тайных знаний из файлов csv
create table [dbo].[research_secret]([slug] [varchar](50),[name] [nvarchar](250),[level] int,[soul_shard] int,[gold] int,[time_days] int,[time_seconds] int,[effect_value] [varchar](10),[effect_name] [nvarchar](250),[oracle] int,[req1] [nvarchar](250),[req2] [nvarchar](250),[req3] [nvarchar](250),[req4] [nvarchar](250),[inf] bigint)
go
truncate table [research_secret]
go
bulk insert [research_secret]
from 'C:\Sources\vikplan.com\src\store\db\research_secret-f.csv'
with (firstrow=2,fieldterminator=';',tablock,codepage='65001')
bulk insert [research_secret]
from 'C:\Sources\vikplan.com\src\store\db\research_secret-o.csv'
with (firstrow=2,fieldterminator=';',tablock,codepage='65001')
bulk insert [research_secret]
from 'C:\Sources\vikplan.com\src\store\db\research_secret-d.csv'
with (firstrow=2,fieldterminator=';',tablock,codepage='65001')
go

-- добавляем тайные знания из буфера в хранилище знаний
delete from [research_level] where slug like 'secret__%'
go
declare @last int
select @last=max(id) from [research_level]
insert into [research_level] (id, slug, [name], [level], gold, [scroll], time_days, time_seconds, effect_value, effect_name, oracle, req1, req2, req3, req4, inf)
select @last+ROW_NUMBER() over (order by slug, [level]) as id, slug, [name], [level], gold, soul_shard as [scroll], time_days, time_seconds, replace(effect_value, ',', '.'), effect_name, oracle, req1, req2, req3, req4, inf
from [research_secret]
go

-- добавляем только тайные знания в research.js
select * from research_level where slug like 'secretf_%'
for json auto

-- добавляем только тайные знания в research_list.js
select slug, [name], max([level]) as max_level, string_agg(cast(replace(effect_value,'%','') as float), ',') as effect_values
from research_level
where slug like 'secretf_%'
group by slug, [name]
order by slug
for json auto
