<template>
	<div id='style-guide'>
		<h1>style-guide</h1>

    <link-comp url="http://bla.com" text="Link Text" variant="arrow"></link-comp>
    <link-comp url="http://bla.com" text="Link Text" variant="play"></link-comp>

    <button-comp url="http://bla.com" text="Button Text" variant="bare"></button-comp>
    <button-comp url="http://bla.com" text="" variant="icon" icon="email"></button-comp>

	</div>
</template>

<script>
import ButtonComp from 'components/shared/ButtonComp.vue';
import LinkComp from 'components/shared/LinkComp.vue';

export default {
  name: 'style-guide-view',
  components: {
    ButtonComp,
    LinkComp
  }
};

</script>

<style lang="sass">
  @import "src/styles/global"
</style>
