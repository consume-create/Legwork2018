<template>
  <article class="schema-component">
		<!-- <input type="checkbox" class="formToggle" v-model='showingForm'/>
    <FormSchema :schema="formSchema" v-model="model" @submit="submit">
			<button type="submit">Submit</button>
    </FormSchema> -->
  </article>
</template>

<script>
// import FormSchema from '@formschema/native'
import schemaBase from './schema-base.js'

export default {
  name: 'FormComponent',
  props: ['schema'],
  data() {
    console.log(Object.assign({}, schemaBase, schema))
    return {
			formSchema: Object.assign({}, schemaBase, schema),
			model: {}, 
			showingForm: false, 
		};
  },
	methods: {
		submit (e) {
			// this.model contains the valid data according your JSON Schema.
			// You can submit your model to the server here
		},
	},
	// components: { FormSchema }
};

</script>

<style scoped lang="sass">
@import "src/styles/global"

</style>