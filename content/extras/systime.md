---
title: Systime
---

<style>
.systime-form {
    text-align: center;
}
.systime-form input {
    font-family: Gotu, sans-serif;
    font-size: 20pt;
    margin: 0.5rem 0;
    text-align: center;
}
#output {
    font-color: #eaa;
}
</style>

You can use this form to convert to/from [systime](https://wiki.post-self.ink/wiki/Systime). This also includes dates in the Hebrew calendar, given their use in a few Post-Self projects.

-----

<div class="systime-form" style="text-align: center;">
    <input type="text" id="systime" value="systime 1+21" /><br>
    <input type="button" id="convertSystime" value="Convert systime..." />
    <hr>
    <input type="date" id="date" value="2125-01-21" /><br>
    <input type="button" id="convertDate" value="Convert date..." />
    <hr>
    <input type="text" id="hebrew" value="16 Shevat, 5885" />
    <div id="output" />
</div>

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
                    document.getElementById('output').innerHTML = `Error converting date`;
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(display);
    });
    function display(json) {
        document.getElementById('output').innerHTML = ``;
        document.getElementById('systime').value = json.systime.string;
        document.getElementById('date').value = json.gregorian.string;
        document.getElementById('hebrew').value = json.hebrew.string;
    }
</script>

