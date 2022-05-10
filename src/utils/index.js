export function throttle(f, t) {
  let lastCall = null;

  return (args) => {
    const previousCall = lastCall;
    lastCall = Date.now();

    if (previousCall === null || lastCall - previousCall > t) {
      f(args);
    }
  };
}

export const isScrollView = (id) => {
  const { innerHeight, scrollY } = window;
  const { offsetTop, scrollHeight } = document.getElementById(id);

  return innerHeight + scrollY > offsetTop + scrollHeight - 600;
};

export const debounce = (f, ms) => {
  let isCooldown = false;

  return function wrapper(...arg) {
    if (isCooldown) return;

    f.apply(this, arg);

    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;
    }, ms);
  };
};

export const elementVisible = (target, cb) => {
  if (!target) return null;

  const targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
  };

  const windowPosition = {
    top: window.pageYOffset,
    bottom: window.pageYOffset + document.documentElement.clientHeight,
  };

  if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom) {
    cb();
  }
};
