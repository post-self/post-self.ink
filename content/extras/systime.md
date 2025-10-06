---
title: Systime
---

You can use this form to convert to/from [systime](https://wiki.post-self.ink/wiki/Systime). This also includes dates in the Hebrew calendar, given their use in a few Post-Self projects.

<div style="text-align: center;">
    <input type="text" id="systime" value="systime 1+21" /><br>
    <input type="button" id="convertSystime" value="Convert systime..." />
    <hr>
    <input type="text" id="date" value="2125-01-21" /><br>
    <input type="button" id="convertDate" value="Convert date..." />
</div>
<div id="output" />
<script type="text/javascript">
    document.getElementById('convertSystime').addEventListener("click", (ev) => {
        fetch(`https://systime.post-self.ink/api/1/systime/${document.getElementById('systime').value}`)
            .then((response) => {
                if (!response.ok) {
                    document.getElementById('output').innerHTML = `Error converting systime`;
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(display);
    });
    document.getElementById('convertDate').addEventListener("click", (ev) => {
        fetch(`https://systime.post-self.ink/api/1/date/${document.getElementById('date').value}`)
            .then((response) => {
                if (!response.ok) {
                    document.getElementById('output').innerHTML = `Error converting systime`;
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(display);
    });
    function display(json) {
        document.getElementById('output').innerHTML = `
        <dl>
            <dt>Systime</dt>
            <dd>${json.systime.string}</dd>
            <dt>Gregorian</dt>
            <dd>${json.gregorian.string}</dd>
            <dt>Hebrew</dt>
            <dd>${json.hebrew.string}</dd>
        </dl>`;
    }
</script>

