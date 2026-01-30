const Buttons = ({ runs,
    setRuns, 
    singles, 
    setSingles, 
    fours, 
    setFours, 
    sixes, 
    setSixes }) => {
    const handleSingle = () => {
        const newRuns = runs + 1
        const newSingles = singles + 1
        setRuns(newRuns)
        setSingles(newSingles)
    }
    const handleFour = () => {
        const newRuns = runs + 4
        const newFours = fours + 1
        setRuns(newRuns)
        setFours(newFours)
    }
    const handleSix = () => {
        const newRuns = runs + 6
        const newSixes = sixes + 1
        setRuns(newRuns)
        setSixes(newSixes)
    }
    return (
        <div className='flex flex-col lg:flex-row gap-4'>
            <button onClick={handleSingle} className='btn btn-ghost btn-outline rounded-xl'>Add Single</button>
            <button onClick={handleFour} className='btn btn-ghost btn-outline rounded-xl'>Add Four</button>
            <button onClick={handleSix} className='btn btn-ghost btn-outline rounded-xl'>Add Six</button>
        </div>
    );
};

export default Buttons;