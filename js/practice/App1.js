import {people} from './Data.js';
import {getImageUrl} from './Utils.js';

export default function List() {
    const chemist = people.filter(person => {
        return person.profession === '化学家';
    });

    const everyoneElse = people.filter(person => {
        return person.profession !== '化学家';
    })

    return (
        <>

            <h1>化学家</h1>
            <ul>
                {chemist.map(person =>
                    <li key={person.id}>
                        <img src={getImageUrl(person)} alt={person.name}/>
                        <p>
                            <b>{person.name}:</b>
                            {' ' + person.profession + ' '}
                            因{person.accomplishment}而闻名世界
                        </p>
                    </li>)}
            </ul>

            <h1>科学家</h1>
            <ul>
                {everyoneElse.map(person =>
                    <li key={person.id}>
                        <img src={getImageUrl(person)} alt={person.name}/>
                        <p>
                            <b>{person.name}:</b>
                            {' ' + person.profession + ' '}
                            因{person.accomplishment}而闻名世界
                        </p>
                    </li>)}
            </ul>
        </>
    )
}
