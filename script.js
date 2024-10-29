const options = [
  {id: 'option1',
    text: 'Ferrari',
    votes: 0
  },
  {id: 'option2',
    text: 'McLaren',
    votes: 0
  },
  {id: 'option3',
    text: 'Mercedes',
    votes: 0
  },
  {id: 'option4',
    text: 'Red Bull',
    votes: 0
  },
]


const getTotalVotes = () => {
  return options.reduce((total, option) => total + option.votes, 0)
}

const submitVote = () => {
  const selectedOption = document.querySelector('input[name="poll"]:checked' )
  if (!selectedOption) {
    alert('Please choose your team...')
    return
  }
  const optionId = selectedOption.value
  const selectedOptionObj = options.find((option) => option.id === optionId)
  if (selectedOptionObj) {
    selectedOptionObj.votes++
    displayResult()
  }
}

const displayResult = () => {
  const result = document.getElementById('result')
  result.innerHTML = ''

  options.forEach((option) => {
    const percentage = ((option.votes / getTotalVotes()) * 100).toFixed(2) || 0;
    const barWidth = percentage > 0 ? percentage + '%' : '0%'
    const optionResult = document.createElement('div')
    optionResult.innerHTML = 
      `
      <span class = 'option-text'>${option.text}</span>
      <div class = 'bar-container'>
        <div class = 'bar' style='width: ${barWidth};'></div> 
      </div>
      <span class = 'percentage'>${percentage}%</span>
      `
    result.appendChild(optionResult)
  })
}

displayResult()