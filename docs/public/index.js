const updateUI = async () => {
  // update github versions
  const updateGitVersions = async () => {
    const response = await fetch('https://api.github.com/repos/finsweet/ts-utils/releases');
    console.log('response', response);

    const versions = await response.json();

    // get the most recent 5 updates
    const recentUpdates = versions.slice(0, 5).map((version) => {
      return {
        text: version.name,
        link: version.html_url,
        target: '_blank',
      };
    });

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
          link.classList.add('active');
        });

        const defaultLink = linkTemplateClone?.cloneNode(true);
        const defaultLinkText = defaultLink?.querySelector('a');
        defaultLinkText.innerText = 'View all';
        defaultLinkText.href = 'https://github.com/finsweet/ts-utils/releases';
        defaultLinkText.target = '_blank';

        linkTemplateParent.appendChild(defaultLinkText);
      }
    });
  };

  await updateGitVersions();

  const checkIfGitUpdated = setInterval(async () => {
    const dropdowns = document?.querySelectorAll('.VPFlyout.VPNavBarMenuGroup');

    const conditionMet = Array.from(dropdowns)
      ?.map((dropdown) => {
        const changelogNode = Array.from(dropdown?.childNodes).filter((node) => {
          return node?.textContent?.toLowerCase().includes('changelog');
        });

        if (changelogNode.length > 0) {
          const linkTemplateParent = dropdown?.querySelectorAll('.items .VPMenuLink');
          return linkTemplateParent?.length > 1;
        }
        return false;
      })
      ?.find((condition) => condition);

    if (conditionMet) {
      clearInterval(checkIfGitUpdated);
    } else {
      await updateGitVersions();
    }
  }, 300);

  // update ts-utils link

  const links = document?.querySelectorAll('a p');
  const linksNavbar = document?.querySelectorAll('.VPNavBarMenu .VPLink.link');

  const tsUtilsLink = Array?.from(links)?.filter((link) => {
    return link?.innerText === 'ts-utils';
  });
  const tsUtilsLinkNavbar = Array?.from(linksNavbar)?.filter((link) => {
    return link?.innerHTML.includes('ts-utils');
  });

  if (tsUtilsLink?.length === 0 || tsUtilsLinkNavbar?.length === 0) return;

  const tsUtilsLinkWrapper = tsUtilsLink[0]?.parentElement?.parentElement?.parentElement;
  const [navbarLink] = tsUtilsLinkNavbar;

  tsUtilsLinkWrapper?.classList.add('is-active');
  tsUtilsLinkWrapper?.classList.add('has-active');
  navbarLink?.classList.add('active');

  const callback = (mutations) => {
    mutations?.forEach((mutation) => {
      if (mutation.type === 'childList') {
        if (!tsUtilsLinkWrapper?.classList?.contains('is-active')) {
          tsUtilsLinkWrapper?.classList?.add('is-active');
        }

        if (!tsUtilsLinkWrapper?.classList?.contains('has-active')) {
          tsUtilsLinkWrapper?.classList?.add('has-active');
        }

        if (!navbarLink?.classList?.contains('active')) {
          navbarLink?.classList?.add('active');
        }
      }
    });
  };

  const observer = new MutationObserver(callback);
  const body = document?.body;

  if (!body) return;

  observer?.observe(body, {
    childList: true,
    subtree: true,
  });
};

window?.addEventListener('load', updateUI);
