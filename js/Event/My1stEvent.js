export default function Button(props) {
   /* function handleClick() {
        alert('clicked!')
    }

    return (
        <button onClick={handleClick}>
            click me !
        </button>
    )*/

   /* return (
        <button onClick={function handleClick2() {
            alert("clicked2")
        }
        }>
            click me !
        </button>
    )*/

    return (
        <button onClick={() => alert('click by anonymous function')}>click me</button>
    )
};

export function AlertButton({message, children}) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

export function Toolbar() {
    return (
        <div>
            <AlertButton message="Playing movie now！">
                Play Chang An (长安三万里)
            </AlertButton>
            <AlertButton message="正在上传！">
                Upload image of Himalaya
            </AlertButton>
        </div>
    );
}