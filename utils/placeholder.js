/**
 * Generate a placeholder image URL
 * @param {number} width - Width of the placeholder image
 * @param {number} height - Height of the placeholder image
 * @returns {string} - Placeholder image URL
 */
export const getPlaceholderImage = (width = 300, height = 300) => {
    return `https://via.placeholder.com/${width}x${height}/e2e2e2/808080?text=Placeholder`
}