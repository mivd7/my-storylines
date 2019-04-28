const StoryInputForm = (props) => {
  const [additions, setAdditions] = useState(props.additions)
  const [input, setInput] = useState('')

  const addAddition = (addition) => {
    const newAdditions = [...additions, {addition}]
    setAdditions(newAdditions)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input) return;
    addAddition(input);
  }

 return(
 <div className="flex flex-column">
        {additions}
        <br/>
        <form onSubmit={handleSubmit}>
          <input
            input={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add Your Line"
          />
          </form>
          <Mutation mutation={ADD_TO_STORY}
                    variables={{ text: [input], storyId: `${props.storyId}` }} >
            {addMutation => <div><button onClick={addMutation}><Link to={`/stories/${props.storyId}`}>Submit</Link></button></div>}
          </Mutation>
    </div>
  )
}

export default StoryInputForm