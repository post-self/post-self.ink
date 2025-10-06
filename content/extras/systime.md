---
title: Systime
---

You can use this form to convert to/from [systime](https://wiki.post-self.ink/wiki/Systime).

<div style="text-align: center;">
    <input type="text" id="systime" value="systime 1+21" /><br>
    <input type="button" id="convert" value="Convert systime..." />
</div>
<div id="output" />
<script type="text/javascript">
    document.getElementById('convert').addEventListener("click", (ev) => {
        fetch(`https://systime.post-self.ink/api/1/systime/${document.getElementById('systime').value}`)
            .then((response) => {
                if (!response.ok) {
                    document.getElementById('output').innerHTML = `Error converting systime`;
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then((json) => {
                document.getElementById('output').innerHTML = `
                <dl>
                    <dt>Systime</dt>
                    <dd>${json.systime.string}</dd>
                    <dt>Gregorian</dt>
                    <dd>${json.gregorian.string}</dd>
                    <dt>Hebrew</dt>
                    <dd>${json.hebrew.string}</dd>
                </dl>`;
            });
    });
</script>

