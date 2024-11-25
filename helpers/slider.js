
export const initializeGlide = (selector, options) => {
    const glide = new Glide(selector, options);
    glide.mount();
    return glide; 
}