describe('Load Data From JSON', () => {
	const unosquare = browser.page.mainpage()
	const blog = browser.page.blog()
	const about = browser.page.about()
	beforeEach((browser) => {
		browser.maximizeWindow()
	})
	it('Task 1 Data Driven Testing ', () => {
		// Go to unosquare.com
		unosquare
			.navigate()
			// Go to Blog
			.clickOnBlog()
		// Validate that the following header "DIGITAL TRANSFORMATION BLOG" exists
		blog.assert.textContains('@headerBlog', 'DIGITAL TRANSFORMATION BLOG')
		// Using asserts, validate that the URL should be: https://blog.unosquare.com/
		blog.assert
			.urlEquals('https://blog.unosquare.com/')
			// Under the search bar validate that Recent Post and Popular Posts elements are visible
			.assert.visible('@recentPostsLabel')
			.assert.textContains('@recentPostsLabel', 'RECENT POSTS')
			.assert.visible('@popularPostsLabel')
			.assert.textContains('@popularPostsLabel', 'POPULAR POSTS')
			// Using the visible Search bar and a JSON file to provide the data, search the following: "QA", "Development", "JAVA", "Testing"
			.assert.visible('@searchBar')
			.performSearchBlog('searchTerms.json')
		// Go to About page
		blog.click('@aboutLink')
		// Using asserts verify that the following names are present: Mario Di Vece, Giancarlo Di Vece, Eduardo Arias, Ignacion Miranda and Diego Huerta
		about.checkNamesInAbout('searchTerms.json')
	})
})
