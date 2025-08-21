function switchTab(e) {
  e.preventDefault();
  const tab = window.location.hash.substring(1);

  // Unselect currently selected item.
  try {
    document
      .querySelector('.carousel-entry.on').classList.remove('on');
    document
      .querySelector('.carousel-item.on').classList.remove('on');
  } catch(e) {
    // pass
  }

  // Select the new item.
  document
    .querySelector(`.carousel-entry.${tab}`)
    .classList.add('on');
  document
    .querySelector(`.carousel-item.${tab}`)
    .classList.add('on');
}

function load() {
  // Add a listener for the location changing if window width supports it.
  if (window.innerWidth >= 960) {
    window.addEventListener('popstate', switchTab);
  } else {
    window.removeEventListener('popstate', switchTab);
  }
}

// If we enter the page with no hash, select home.
if (!window.location.hash) {
  history.pushState({}, '', '#home');
}

// If we enter the page with a hash, select the current item.
switchTab({preventDefault: () => {}});
load();
window.addEventListener('resize', load);
