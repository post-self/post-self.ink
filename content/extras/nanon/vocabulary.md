---
type: page
title: Vocabulary
---

<style>
tbody tr td:first-child {
    font-weight: bolder;
}
</style>

<table id="vocab">
    <thead>
        <tr>
            <!--<th>ID</th>-->
            <th>Entry</th>
            <th>Role</th>
            <th>Meaning</th>
        </tr>
    </thead>
    <tbody id="vocab-list"></tbody>
</table>

<script src="/js/sql.js"></script>
<script type="text/javascript">
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/extras/nanon/vocabulary.sqlite3', true);
    xhr.responseType = 'arraybuffer';
    var body = document.getElementById('vocab-list');
    xhr.onload = function(e) {
        var uInt8Array = new Uint8Array(this.response);
        var db = new SQL.Database(uInt8Array);
        var contents = db.exec("SELECT * FROM words");
        contents[0].values.forEach((row) => {
            var tr = document.createElement('tr');

            /*var id = document.createElement('td');
            id.appendChild(document.createTextNode(row[0]))
            tr.appendChild(id);*/

            var entry = document.createElement('td');
            entry.appendChild(document.createTextNode(row[1]))
            tr.appendChild(entry);

            var role = document.createElement('td');
            role.appendChild(document.createTextNode(row[2]))
            tr.appendChild(role);

            var meaning = document.createElement('td');
            meaning.appendChild(document.createTextNode(row[3]))
            tr.appendChild(meaning);

            body.appendChild(tr);
        });
    };
    xhr.send();
</script>
