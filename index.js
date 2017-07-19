var cards = new Vue({
	el: '#field',
	data: {
		cards: [{
			inputWord: '',
			mode: 'include',
			fromDate: '',
			toDate: '',
			words: [],
			level: {
				type: 'literati',
				name: '',
				mode: ''
			},
			toselect: '',
			options: [
				'正國級',
				'副國級',
				'正省部級',
				'副省部級',
				'正廳局級',
				'副廳局級',
				'正縣處級',
				'副縣處級',
				'正科級',
				'副科級'
			]
		}]
	},
	methods: {
		addWord: function (cindex) {
			this.cards[cindex].words.push({
				content: this.cards[cindex].inputWord
			})
			this.cards[cindex].inputWord = ''
			console.log(cindex)
		},
		addCard: function () {
			this.cards.push({
				inputWord: '',
				mode: 'include',
				fromDate: '',
				toDate: '',
				words: [],
				level: {
					type: 'literati',
					name: '',
					mode: ''
				},
				toselect: '',
				options: [
					'正國級',
					'副國級',
					'正省部級',
					'副省部級',
					'正廳局級',
					'副廳局級',
					'正縣處級',
					'副縣處級',
					'正科級',
					'副科級'
				]
			})
		},
		deleteCard: function (cindex) {
			this.cards.splice(cindex, 1)
		},
		deleteWord: function (cindex, windex) {
			this.cards[cindex].words.splice(windex, 1)
		},
		changeMode: function (cindex, mode) {
			this.cards[cindex].mode = mode
		},
		changeLevelName: function(cindex) {
			this.cards[cindex].level.name = this.cards[cindex].toselect
		},
		changeLevelMode: function(cindex, mode) {
			this.cards[cindex].level.mode = mode
		},
		showData: function() {
			console.log(this.cards)
		}
	}
})

jQuery(function () {
	jQuery('#submit-button').on('click', function () {
		window.localStorage.setItem('card-search-cards', JSON.stringify({
			cards: cards.cards.map(function (card) {
				return {
					mode: card.mode,
					fromDate: card.fromDate,
					toDate: card.toDate,
					words: card.words.map(function (word) {
						return word.content
					})
				}
			})
		}))

	//window.location.href = window.location.origin + '/result.html'
	var tmp = window.location.origin
	// var tmp = "http://cped2.nccu.edu.tw:1081"
    window.open(tmp + '/result.html', '_blank')
  })
})
