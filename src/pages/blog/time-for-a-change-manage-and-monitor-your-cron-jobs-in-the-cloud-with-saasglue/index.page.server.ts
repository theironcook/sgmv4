export function onBeforeRender() {
  return {
    pageContext: {
      documentProps: { title: '', description: '' }
    }
  };
}
