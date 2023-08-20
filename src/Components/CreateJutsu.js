import { useState, useEffect } from "react"
import axios from 'axios'
import Select from 'react-select'

import Monkey from '../Images/Monkey.jpg'
import Dragon from '../Images/Dragon.jpg'
import Rat from '../Images/Rat.jpg'
import Bird from '../Images/Bird.jpg'
import Serpernt from '../Images/Serpernt.jpg'
import Ox from '../Images/Ox.jpg'
import Dog from '../Images/Dog.jpg'
import Horse from '../Images/Horse.jpg'
import Tiger from '../Images/Tiger.jpg'
import Boar from '../Images/Boar.jpg'
import Ram from '../Images/Ram.jpg'
import Hare from '../Images/Hare.jpg'

const CreateJutsu = () => {

    const options = [
        {
            value: 'Saru/Monkey',
            image: Monkey,
            label: 'Monkey'
        },
        {
            value: 'Tastu/Dragon',
            image: Dragon,
            label: 'Dragon'
        },
        {
            value: 'Ne/Rat',
            image: Rat,
            label: 'Rat'
        },
        {
            value: 'Tori/Bird',
            image: Bird,
            label: 'Bird'
        },
        {
            value: 'Mi/Snake',
            image: Serpernt,
            label: 'Serpernet'
        },
        {
            value: 'Ushi/Ox',
            image: Ox,
            label: 'Ox'
        },
        {
            value: 'Inu/Dog',
            image: Dog,
            label: 'Dog'
        },
        {
            value: 'Uma/Horse',
            image: Horse,
            label: 'Horse'
        },
        {
            value: 'Tora/Tiger',
            image: Tiger,
            label: 'Tiger'
        },
        {
            value: 'I/Boar',
            image: Boar,
            label: 'Boar'
        },
        {
            value: 'Hitsuji/Ram',
            image: Ram,
            label: 'Ram'
        },
        {
            value: 'U/Hare',
            image: Hare,
            label: 'Hare'
        }
    ]

    const [userJutsus, setUserJutsus] = useState([])
    const [selectedOption, setSelectedOption] = useState([])
    const [jutsu, setJutsu] = useState('')
    console.log(selectedOption)

    // const fetchJutsus = () => {
    //         axios
    //             .get('http://localhost:1234/naruto')
    //             .then((res) => {
    //                 setUserJutsus(res.data)
    //                 // console.log('line 14', res.data)
    //             })
    //             .catch(err => console.log(err))
    // }

    // useEffect(() => {
    //     fetchJutsus()
    // }, [])

    // console.log('line 23', userJutsus)

    const handleSelectedOption = (selected) => {
        setSelectedOption(prev => [...prev, selected.value])
    }

    const handleJutsuName = (e) => {
        setJutsu(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log('line 111', selectedOption[0])
        console.log('line 112', selectedOption[1])
        console.log('line 113', selectedOption[2])
        console.log('line 114', selectedOption[3])
        console.log('line 115', selectedOption[4])
        console.log('line 116', selectedOption[5])
        console.log('line 117', jutsu)

        const submitBody = {
            sealOne: selectedOption[0],
            sealTwo: selectedOption[1],
            sealThree: selectedOption[2],
            sealFour: selectedOption[3],
            sealFive: selectedOption[4],
            sealSix: selectedOption[5],
            jutsuName: jutsu
        }

        await
            axios
                .post('http://localhost:1234/naruto', submitBody)
                .then((res) => {
                    console.log(res.data)
                    setSelectedOption([])
                    setJutsu('')
                })
                .catch(err => console.log(err))
    }


    return (
        <div className="jutsuForm">
            <form onSubmit={handleSubmit}>
                <div className="secondRow">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Select
                            key={index}
                            value={selectedOption.image}
                            onChange={handleSelectedOption}
                            options={options}
                            formatOptionLabel={seals => (
                                <div className="selectImgContainer">
                                    <img src={seals.image} alt={seals.label} width='70px' height='70px' />
                                    <br/>
                                    <label>{seals.label}</label>
                                </div>
                            )}
                        />
                    ))}
                </div>
                <div className="firstRow">
                    <input type="text" value={jutsu} onChange={handleJutsuName} placeholder="Enter Jutsu Name" />
                </div>
                <div className="thirdRow">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateJutsu