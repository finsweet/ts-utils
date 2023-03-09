(async () => {
  const response = await fetch('https://api.github.com/repos/finsweet/ts-utils/releases');

  const versions = await response.json();

  // get the most recent 5 updates
  const recentUpdates = versions.slice(0, 5).map((version) => {
    return {
      text: version.name,
      link: version.html_url,
      target: '_blank',
    };
  });

  //

  const navDropdowns = document?.querySelectorAll('.VPFlyout.VPNavBarMenuGroup');

  navDropdowns?.forEach((dropdown) => {
    const changelogNode = Array.from(dropdown?.childNodes).filter((node) => {
      return node?.textContent?.toLowerCase().includes('changelog');
    });

    if (changelogNode.length > 0) {
      const linkTemplateParent = dropdown?.querySelector('div.menu .items');

      const linkTemplate = linkTemplateParent?.children[0];
      const linkTemplateClone = linkTemplate?.cloneNode(true);

      linkTemplateParent.innerHTML = '';

      recentUpdates?.forEach((update) => {
        const link = linkTemplateClone?.cloneNode(true);
        const linkText = link?.querySelector('a');

        linkText.innerText = update.text;
        linkText.href = update.link;
        linkText.target = update.target;

        linkTemplateParent.appendChild(link);
      });
    }
  });
})();
