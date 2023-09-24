
export const getImageClass = (styles: { [style_name: string]: any }, project_name: string) => {

    if (project_name.includes('social-nenwork')) {
        return styles.sn
    }
    if (project_name.includes('to-do')) {
        return styles['to-do']
    }
    if (project_name.includes('portfolio')) {
        return styles.portfolio
    }
    if (project_name.includes('counter')) {
        return styles.counter
    }

    return styles.empty

}