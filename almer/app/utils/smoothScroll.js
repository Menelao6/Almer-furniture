export const smoothScroll = (targetId) => {
    if (typeof window !== 'undefined') {
      const target = document.getElementById(targetId);
      if (target) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 80;
        window.scrollTo({
          top: target.offsetTop - headerHeight,
          behavior: 'smooth'
        });
      }
    }
  };