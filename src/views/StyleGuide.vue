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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.7 73"><defs><style>.cls-1{fill:none;stroke:#000;stroke-width:5px;}</style></defs><title>circle-arrow</title><g id="Layer_2" data-name="Layer 2"><g id="circle-group"><g id="circle-arrow"><path id="arrow" d="M43.3 25.9l-3.5 3.6 4.3 4.3H22v5h22.1l-4.4 4.4 3.5 3.5 10.4-10.4-10.3-10.4z"/><path id="oval_arrow" data-name="oval arrow" class="cls-1" d="M71.2 36.5c0-18.8-16-34-34.7-34a34 34 0 0 0 0 68c18.8 0 34.7-15.2 34.7-34z"/></g></g></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.7 73"><defs><style>.cls-1{fill:none;stroke:#000;stroke-width:5px;}</style></defs><title>circle-info (2)</title><g id="Layer_2" data-name="Layer 2"><g id="circle-group"><g id="circle-info"><path d="M36.4 28.6a3.6 3.6 0 0 0 3.6-3.5 3.5 3.5 0 0 0-3.5-3.5 3.6 3.6 0 0 0-3.6 3.5 3.5 3.5 0 0 0 3.5 3.5zM39.7 47.2V32.5h-8.4v4.9h2.8v9.7h-2.8V52h11.1v-4.8h-2.7z"/><path id="oval-info" class="cls-1" d="M71.2 36.5c0-18.8-16-34-34.7-34a34 34 0 0 0 0 68c18.8 0 34.7-15.2 34.7-34z"/></g></g></g></svg>        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.7 73"><defs><style>.cls-1{fill:none;stroke:#000;stroke-width:5px;}</style></defs><title>circle-play</title><g id="Layer_2" data-name="Layer 2"><g id="circle-group"><g id="circle-play"><path id="play" d="M45.4 36.6l-12 9.2V27.5l12 9.1z"/><path id="oval-play" class="cls-1" d="M71.2 36.5c0-18.8-16-34-34.7-34a34 34 0 0 0 0 68c18.8 0 34.7-15.2 34.7-34z"/></g></g></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.7 73"><defs><style>.cls-1{fill:none;stroke:#000;stroke-width:5px;}</style></defs><title>circle-plus</title><g id="Layer_2" data-name="Layer 2"><g id="circle-group"><g id="circle-plus"><path id="plus" d="M46.4 34.1h-8.3v-8.5h-5v8.5h-8.3v5h8.3v8.1h5v-8.1h8.3v-5z"/><path id="oval-plus" class="cls-1" d="M71.2 36.5c0-18.8-16-34-34.7-34a34 34 0 0 0 0 68c18.8 0 34.7-15.2 34.7-34z"/></g></g></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.7 73"><defs><style>.cls-1{fill:none;stroke:#000;stroke-width:5px;}</style></defs><title>circle-x</title><g id="Layer_2" data-name="Layer 2"><g id="circle-group"><g id="circle-x"><path id="x" d="M46 42.2l-5.9-5.9 5.4-5.4-3.5-3.5-5.4 5.4-5.9-5.9-3.5 3.6 5.8 5.8-6.3 6.3 3.6 3.6 6.3-6.3 5.8 5.8 3.6-3.5z"/><path id="oval-x" class="cls-1" d="M71.2 36.5c0-18.8-16-34-34.7-34a34 34 0 0 0 0 68c18.8 0 34.7-15.2 34.7-34z"/></g></g></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56.1"><defs><style>.cls-1{fill:none;stroke:#000;stroke-width:3px;}</style></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="play"><path id="Oval-5-Copy-3" class="cls-1" d="M54.5 28.1A26.89 26.89 0 0 0 27.7 1.5 26.38 26.38 0 0 0 1.5 28.1a26.35 26.35 0 0 0 26.2 26.5c14.4 0 26.8-11.9 26.8-26.5z"/><path id="Triangle" d="M32.1 28.9l-7.7 5.8V23.1l7.7 5.8z"/></g></g></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.1 29.4"><title>Asset 4</title><g data-name="Layer 1"><path d="M0 0h6.6v6.5H0zM26.5 0h6.6v6.5h-6.6zM0 22.9h6.6v6.5H0zM26.5 22.9h6.6v6.5h-6.6z"/></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.7 27.3"><title>Asset 1</title><path d="M22 18.7a12 12 0 0 0 2.2-6.8A12 12 0 0 0 12.1 0H12a11.7 11.7 0 0 0-8.5 3.5A11.64 11.64 0 0 0 0 11.9a12 12 0 0 0 12.1 11.9 11.35 11.35 0 0 0 6.9-2.2l5.7 5.7 3-2.9zm-2-6.8a7.83 7.83 0 0 1-7.9 7.8 7.83 7.83 0 0 1-7.9-7.8 7.9 7.9 0 0 1 15.8 0z" data-name="Layer 1"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56.1"><defs><style>.cls-1{fill:none;stroke:#000;stroke-width:3px;}</style></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="play"><path id="Oval-5-Copy-3" class="cls-1" d="M54.5 28.1A26.89 26.89 0 0 0 27.7 1.5 26.38 26.38 0 0 0 1.5 28.1a26.35 26.35 0 0 0 26.2 26.5c14.4 0 26.8-11.9 26.8-26.5z"/><path id="Triangle" d="M32.1 28.9l-7.7 5.8V23.1l7.7 5.8z"/></g></g></g></svg>

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

    svg
      width: 50px
      margin-right: 10px
</style>
