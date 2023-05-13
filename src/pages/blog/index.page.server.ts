export function onBeforeRender() {
  return {
    pageContext: {
      documentProps: { title: 'Blog | SaaSGlue', description: '' }
    }
  };
}
