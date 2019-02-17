const APIURL = ''
const container = document.querySelector('.container')

const getStories = () => {
	fetch(APIURL)
		.then(response => response.json())
		.then(data => {
			const stories = data.list
			renderStories(stories)
		})
}

const renderStories = stories => {
	const header = document.createElement('div')
	header.id = 'paulClark'
	header.innerHTML = '<h3>Paul Clark - Full Stack Developer</h3>'
	container.appendChild(header)
	const storiesDiv = document.createElement('div')
	storiesDiv.className = 'storiesDiv'
	container.appendChild(storiesDiv)
	for (const story of stories) {
		renderOneStory(story)
	}
}

const renderOneStory = story => {
	const { thumbnail, name, branding, categories, url } = story
	const categoryParagraph = categories
		? categories.map(category => `<p class="category">${category}</p>`)
		: ''
	const storiesDiv = document.querySelector('.storiesDiv')
	const storyDiv = document.createElement('div')
	storyDiv.className = 'story'
	storyDiv.innerHTML = `
  <a href="${url}"><img src='${thumbnail[0].url}'></a>
  <a href="${url}"><p class='name'>${name}</p></a>
 <a href="${url}"> <strong><p class='branding'>${branding}</p></strong></a>
  ${categoryParagraph}
  `
	storiesDiv.appendChild(storyDiv)
}

getStories()
