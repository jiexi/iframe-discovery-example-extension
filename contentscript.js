console.log('iframe contentscript: injected')

function announceExtension() {
  var data = { extensionId: 'some-extension-id' }
  var event = { type: 'announceExtension', data }
  window.top.postMessage(event, '*')
  console.log('iframe contentscript: dispatched announceExtension')
}

announceExtension()

window.addEventListener('message', event => {
  if (event.data.type === 'requestExtensions') {
    console.log('iframe contentscript: received requestExtensions', event)
    announceExtension()
  }
});
