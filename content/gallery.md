---
title: Gallery
type: page
---


<style>
img {
    display: inline-block;
    max-height: 200px;
}
.merge {
    display: inline-block;
    position: relative;
}
.merge img {
    position: relative;
    filter: url(#pixelate);
}
.merge span {
    width: 80%;
    text-align: center;
    position: absolute;
    text-indent: 0;
    top: 70px;
    left: 10%;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    font-family: sans-serif;
    text-shadow: 2px 3px 0px #000;
    background-color: rgba(0,0,0,0);
    text-align: center;
}
</style>

Over the course of publication and as funded by the backers of the *Mitzvot* Kickstarter, much in the way of art surrounding the Post-Self universe and its character has accrued.

## *Qoheleth and Gallery Exhibition*

[![Art by Iris Jay](/img/gallery/qoheleth-front.png)](/img/gallery/qoheleth-front.png)
[![Art by Cadmium Tea](/img/gallery/awdae-1.png)](/img/gallery/awdae-1.png)
[![Art by Cadmium Tea](/img/gallery/awdae-2.png)](/img/gallery/awdae-2.png)
[![Art by johnny d.](/img/gallery/dear.png)](/img/gallery/dear.png)
[![Art by Iris Jay](/img/gallery/qoheleth-back.png)](/img/gallery/qoheleth-back.png)

## *Toledot*

[![Art by Iris Jay](/img/gallery/toledot-front.png)](/img/gallery/toledot-front.png)
[![Art by Kris Weaver](/img/gallery/shove.png)](/img/gallery/shove.png)
[![Art by JAIYANDT](/img/gallery/cairns.png)](/img/gallery/cairns.png)
[![Art by Kris Weaver](/img/gallery/dandelions.png)](/img/gallery/dandelions.png)
[![Art by Iris Jay](/img/gallery/toledot-back.png)](/img/gallery/toledot-back.png)

## *Nevi'im*

[![Art by Iris Jay](/img/gallery/neviim-front.png)](/img/gallery/neviim-front.png)
[![Art by johnny d.](/img/gallery/awnh.png)](/img/gallery/awnh.png)
[![Art by JAIYANDT](/img/gallery/stolon.png)](/img/gallery/stolon.png)
[![Art by Iris Jay](/img/gallery/neviim-back.png)](/img/gallery/neviim-back.png)

## *Mitzvot and Selected Letters*

[![Art by Iris Jay](/img/gallery/mitzvot-front.png)](/img/gallery/mitzvot-front.png)
[![Art by Iris Jay](/img/gallery/monologue.png)](/img/gallery/monologue.png)
<a class="merge" href="/img/gallery/merge.png"><img alt="Art by Iris Jay" src="/img/gallery/merge.png" /><span>Spoiler</span></a>
[![Art by Iris Jay](/img/gallery/mitzvot-back.png)](/img/gallery/mitzvot-back.png)

## Additional art

[![Art by Iris Jay](/img/gallery/dear-ref.png)](/img/gallery/dear-ref.png)
[![Art by JAIYANDT](/img/gallery/writerskunk.png)](/img/gallery/writerskunk.png)
[![Art by JAIYANDT](/img/gallery/ref-3.png)](/img/gallery/ref-3.png)
<a class="merge" href="/img/gallery/ref.png"><img alt="Art by JAIYANDT" src="/img/gallery/ref.png" /><span>Artistic<br>nudity</span></a>
        
<script type="text/javascript">
// There has to be a better way to do this with markdown :P
document.querySelectorAll('a').forEach(link => {
    if (link.attributes.href.textContent.substring(0,4) === '/img') {
        link.setAttribute('target', '_blank');
    }
});
</script>
<svg width="0" height="0">
  <filter id="pixelate" x="0" y="0">
    <feFlood x="4" y="4" height="2" width="2"/>
    <feComposite width="10" height="10"/>
    <feTile result="a"/>
    <feComposite in="SourceGraphic" in2="a" operator="in"/>
    <feMorphology operator="dilate" radius="5"/>
  </filter>
</svg>
