document.addEventListener('DOMContentLoaded', function () {
  var floatingVideo = document.createElement('div');
  floatingVideo.id = 'floating-video';
  floatingVideo.style.position = 'fixed';
  floatingVideo.style.top = '20px';
  floatingVideo.style.right = '20px';
  floatingVideo.style.zIndex = '9999';
  floatingVideo.style.pointerEvents = 'auto';
  floatingVideo.style.display = 'flex';
  floatingVideo.style.flexDirection = 'column';
  floatingVideo.style.alignItems = 'flex-end';

  var toggleButton = document.createElement('button');
  toggleButton.innerText = '☰ Watch';
  toggleButton.style.backgroundColor = '#022344';
  toggleButton.style.color = '#fff';
  toggleButton.style.border = 'none';
  toggleButton.style.padding = '12px 16px';
  toggleButton.style.fontSize = '1.2em';
  toggleButton.style.borderRadius = '5px';
  toggleButton.style.cursor = 'pointer';
  toggleButton.style.transition = 'background 0.3s ease-in-out';
  toggleButton.style.zIndex = '1100';
  toggleButton.style.whiteSpace = 'nowrap';
  toggleButton.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';

  var iframeContainer = document.createElement('div');
  iframeContainer.style.width = '280px';
  iframeContainer.style.maxWidth = '90vw';
  iframeContainer.style.backgroundColor = '#022344';
  iframeContainer.style.borderRadius = '5px';
  iframeContainer.style.overflow = 'hidden';
  iframeContainer.style.transition = 'height 0.3s ease';
  iframeContainer.style.height = '0px'; // default collapsed

  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/cA_rWOoGD5U?autoplay=0';
  iframe.frameBorder = '0';
  iframe.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.style.width = '100%';
  iframe.style.height = '180px';

  iframeContainer.appendChild(iframe);
  floatingVideo.appendChild(toggleButton);
  floatingVideo.appendChild(iframeContainer);
  document.body.appendChild(floatingVideo);

  var expandedHeightDesktop = '180px';
  var expandedHeightMobile = '150px';

  function toggleVideo() {
      if (iframeContainer.style.height === '0px') {
          iframeContainer.style.height = (window.innerWidth < 600) ? expandedHeightMobile : expandedHeightDesktop;
          toggleButton.textContent = '🗙 Watch';
      } else {
          iframeContainer.style.height = '0px';
          toggleButton.textContent = '☰ Watch';
      }
  }

  toggleButton.addEventListener('click', toggleVideo);

  function handleResize() {
      if (window.innerWidth < 600) {
          iframeContainer.style.width = '250px';
          iframe.style.height = '150px';
          if (iframeContainer.style.height !== '0px') {
              iframeContainer.style.height = '150px';
          }
          toggleButton.textContent = '☰ Watch'; // mobile starts collapsed
          iframeContainer.style.height = '0px';
      } else {
          iframeContainer.style.width = '260px';
          iframe.style.height = '180px';
          if (iframeContainer.style.height !== '0px') {
              iframeContainer.style.height = '180px';
          }
          iframeContainer.style.height = '180px'; // desktop starts open
          toggleButton.textContent = '🗙 Watch';
      }
  }

  window.addEventListener('resize', handleResize);
  handleResize();
});
