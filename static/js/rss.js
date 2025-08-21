const RSS_URL = `https://read.post-self.ink/post-self/feed/`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      const link    = el.querySelector("link").innerHTML,
            title   = el.querySelector("title").innerHTML,
            pubDate = new Date(el.querySelector("pubDate").innerHTML),
            content = el.querySelector("encoded").childNodes[0].nodeValue; // Get the CDATA value
      html += `
        <article>
          <h2>
            <a href="${link}" target="_blank">
              ${title}
            </a>
          </h2>
          <p class="pub-date">${pubDate.toLocaleString()}</p>
          <section class="item-content">
            ${content}
          </section>
        </article>
      `;
    });
    document.querySelector('#feed').insertAdjacentHTML('beforeend', html);
  });


