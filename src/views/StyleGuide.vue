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

        <div class="sg-sub">Headers</div>
          <h1>An example of a H1 tag</h1>
          <h2>An example of a H2 tag</h2>
          <br />
          <h3>An example of a H3 tag</h3>
          <h4>An example of a H4 tag</h4>
          <h5>An example of a H5 tag</h5>

        <div class="sg-sub">Header Separator</div>
        <h2 class="section-separator">Services</h2>

        <div class="sg-sub">Body</div>
          <p>Paragraph text example. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo modi tenetur optio magni laboriosam. Quaerat distinctio aliquid veritatis quasi non, incidunt architecto quae ut sint ullam natus nisi fugit at.</p>

        <div class="sg-sub">Pull Quote</div>
          <div class="pull-quote">
            <p>The Client's going to fucking hate this.</p>
            <img src="#" />
          </div>

          <div class="pull-quote">
            <p>The Client's going to fucking hate this.</p>
            <img src="#" />
          </div>

        <div class="sg-sub">List w/ header</div>
          <ul class="list-with-header">
            <div>Animation</div>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
          </ul>
      </div>
    </section>

    <section>
      <div class="sg-seciton-header"><span>02</span> UI</div>
      <div class="sg-section-body">
        <div class="sg-sub">Buttons & Links</div>
          <button-comp url="http://bla.com" variant="bare" text="Button"></button-comp>
          <br />
          <link-comp url="http://bla.com" variant="arrow" text="Apply"></link-comp>
          <br />
          <link-comp url="http://bla.com" variant="play" text="Watch Video"></link-comp>



        <div class="sg-sub">Icons</div>
        Icons

        <div class="sg-sub">Indicators</div>
        Indicators

      </div>
    </section>

     <section>
      <div class="sg-seciton-header"><span>03</span> Image Treatment</div>
      <div class="sg-section-body">
        <div class="sg-sub">Images</div>
        Image

        <div class="sg-sub">Job Openings</div>
        Job

      </div>
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
</style>
