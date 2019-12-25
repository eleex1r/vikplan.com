<template>
    <td contentEditable="true" :colspan="colspan"
        @blur="updateValue"
        @keypress="onKeyPress"
        v-text="value">
    </td>
</template>

<script>

export default {
    props: {
        value: {
            type: [String, Number]
        },
        colspan: {
            type: [String, Number],
            default: 1
        }
    },
    methods: {
        updateValue: function(event) {
            if (typeof this.value === 'number') {
                const input = event.target.innerText.trim() || '0';
                const re = /^\d*(\.\d*)?$/;
                if (re.test(input) && input != this.value) {
                    this.$emit('updated', parseFloat(input));
                    event.target.innerText = input;
                } else {
                    event.target.innerText = this.value;
                }
            } else {
                const input = event.target.innerText.trim();
                this.$emit('updated', input);
                event.target.innerText = input;
            }
        },
        onKeyPress: function(event) {
            if (event.keyCode === 13) {
                event.target.blur();
                return true;
            }
            return true;
        }
    }
}

</script>

