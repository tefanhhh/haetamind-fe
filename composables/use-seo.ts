export default () => {
  const generateSeo = (title: string, description: string) => {
    return {
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      twitterTitle: title,
      twitterDescription: description,
    }
  }

  return {
    generateSeo,
  }
}
