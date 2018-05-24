<template>
	<div id='style-guide'>
		<h1>Style Guide</h1>

    <section>
      <div class="sg-seciton-header"><span>01</span> Typography</div>
      <div class="sg-section-body">
        <div class="sg-sub">Font Family</div>
          <p>Font Family: Neuzeit Grotesk, serif </p>
          <p>Weights: </p>
          <ul>
            <li>Regular: 400</li>
            <li>Bold: 700</li>
            <li>Heavy: 900</li>
          </ul>
          <p>Line height: 1.8</p>
        <div class="sg-note">This is set once, globally in the App.vue style section. Modifiers are listed below and should be all you need to really get things styled. Some exceptions are text/pill buttons and links in the header/footer.</div>


        <div class="sg-sub">Styles</div>
          <h1 class="big-type">An example of the largest type we use when you want to yell at people.</h1>
          <div class="sg-note">Use any of these classes to invoke this styling: <pre>h1, .h1, .big-type</pre>. This is used on the Case Study page headers</div>
          <br />
          <br />
          <h2 class="med-type">An example of the second largest type for when you want to shout but you're inside.</h2>
          <div class="sg-note">Use any of these classes to invoke this styling: <pre>h2, .h2, .med-type</pre>. This is used on the large text paragraph on the home page and on the Studio page.</div>
          <br />
          <br />
          <h3 class="section-header">Section headers for separating cool stuff.</h3>
          <div class="sg-note">Use any of these classes to invoke this styling: <pre>h3, .h3, .section-header</pre>. This is used on module sections on the Studio page and on the sections of the Case Study page. It is also used in the "Related Projects" at the bottom of a Case Study.</div>
          <br />
          <br />
          <h4 class="list-header">An example of a list header to give lists a nice hat.</h4>
          <div class="sg-note">Use any of these classes to invoke this styling: <pre>h4, .h4, .list-header</pre>. This is used on the lists on the left of the Studio page, on the Link and List header of the Case Study page.</div>

        <div class="sg-sub">Body</div>
          <p>Paragraph text example. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo modi tenetur optio magni laboriosam. Quaerat distinctio aliquid veritatis quasi non, incidunt architecto quae ut sint ullam natus nisi fugit at.</p>

        <div class="sg-sub">List w/ header</div>
          <ul class="list-with-header">
            <div class="list-header">Animation</div>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
          </ul>
      </div>
    </section>

    <section>
      <div class="sg-seciton-header"><span>02</span> UI</div>
    </section>

    <section>
      <div class="sg-seciton-header"><span>03</span> Image Treatment</div>
    </section>
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

  #style-guide
    max-width: 1024px
    margin: 30px auto

    > h1
      font-size: 30px
      margin-bottom: 20px

    section
      margin-bottom: 20px
      padding-bottom: 20px

    .sg-seciton-header
      color: $black
      font-size: 22px
      text-transform: uppercase
      font-weight: bold
      border-bottom: 5px solid $black
      padding-bottom: 10px

    .sg-sub
      color: $gray
      font-size: 14px
      font-weight: bold
      border-bottom: 2px solid rgba($gray, 0.2)
      margin-bottom: 10px
      margin-top: 20px

    svg
      width: 50px
      margin-right: 10px

    .sg-note
      background: darken($grandpas-office, 20%)
      padding: 1em

      pre
        font-size: 12px
        display: inline-block
        padding: 5px 10px
        font-weight: bold
        background: darken($grandpas-office, 40%)

</style>
