export default function My1stReact() {
    const data = {
        name: 'Forrest',
        age: 26
    }
    return (
        <><My2rdReact data={data}/></>
    )
}

export function My2rdReact(props) {
    const {name, age}= props.data;
    return (
        <>
            <h1> I'm {name}!</h1>
            <br/>
            <h2>I'm {age} !</h2>
        </>
    )
}