var cheerio = require('cheerio')
var request = require('request')

var j = request.jar()

// request({url: 'https://angel.co/login?utm_source=top_nav_home', jar: j}, function(err, resp, body) {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		var $ = cheerio.load(body)
// 		var form = ($('#new_user').children()[0])
// 		var authToken = (form.children[1].attribs.value)
// 		var cookie = j.getCookieString('https://angel.co/login?utm_source=top_nav_home')
// 		request.post({
// 			url: 'https://angel.co/users/login',
// 			headers: {
// 				Cookie: cookie
// 			},
// 			form: {
// 				utf8: '✓',
// 				authenticity_token: authToken,
// 				login_only: true,
// 				user: {
// 					email: 'brandonsack@me.com',
// 					password: 'erccjzw2'
// 				}
// 			}
// 		}, function(err, resp, body) {
// 			var newCookie = resp.headers['set-cookie'][0]
// 			newCookie = newCookie.slice(newCookie.indexOf('_'), newCookie.indexOf(';'))
// 			request({
// 				url: 'https://angel.co/jobs',
// 				headers: {
// 					Cookie: newCookie
// 				}
// 			}, function(err, resp, body) {
// 				var $ = cheerio.load(body)
// 				var csrfToken = $('meta')[1].attribs.content
// 				//find ids
// 				request.post({
// 					url: 'https://angel.co/job_listings/startup_ids', 
// 					headers: {
// 						Cookie: newCookie, 
// 						'X-CSRF-Token': csrfToken
// 					},
// 					form: {	
// 						tab: 'find',
// 						filter_data: {
// 							locations: '1670-Pennsylvania',
// 							roles: 'Software Engineer',
// 							types: 'full-time'
// 						}
// 					}
// 				}, function(err, resp, body) {
// 					var toParse = body.slice(body.indexOf('[') + 1, body.indexOf(']'))
// 					var arr = toParse.split(',')
// 					var url = 'https://angel.co/job_listings/browse_startups_table'
// 					for (var i = 0; i < arr.length; i++) {
// 						url += (i === 0) ? '?' : '&'
// 						url += `startup_ids%5B%5D=${arr[i]}`
// 					}
// 					var reqBody = {
// 						url: url,
// 						headers: {
// 							Cookie: newCookie
// 						}					
// 					}
// 					request(reqBody, function(err, resp, body) {
// 						if (err) {
// 							console.log(err)
// 						} else {
// 							var $ = cheerio.load(body)
// 							var list = []
// 							$('.startup-link').each(function(i, elem) {
// 								list.push($(this).attr('href'))
// 							})
// 							for (var j = 0; j < list.length; j++) {
// 								request({
// 									url: list[j],
// 									headers: {
// 										'User-Agent': 'Brandon'
// 									}
// 								}, function(err, resp, body) {
// 									var $ = cheerio.load(body)
// 									var userList = [];
// 									$('.object-list-title').each(function(i, elem) {
// 										userList.push($(this).children()['0'].attribs.href)
// 									})
// 									for (var k = 0; k < userList.length; k++) {
// 										request({
// 											url: userList[k],
// 											headers: {
// 												'User-Agent': 'Brandon'
// 											}
// 										}, function(err, resp, body) {
// 											console.log($('.link_el fontello-linkedin'))
// 										})
// 									}
// 								})
// 							}
// 						}
// 					})
// 				})
// 			})
// 		})
// 	}
// })

request.post({
	url: 'https://angel.co/job_listings/startup_ids', 
	headers: {
		Cookie: newCookie, 
		'X-CSRF-Token': csrfToken
	},
	form: {	
		tab: 'find',
		filter_data: {
			locations: '1670-Pennsylvania',
			roles: 'Software Engineer',
			types: 'full-time'
		}
	}
}, function(err, resp, body) {
	var toParse = body.slice(body.indexOf('[') + 1, body.indexOf(']'))
	var arr = toParse.split(',')
	var url = 'https://angel.co/job_listings/browse_startups_table'
	for (var i = 0; i < arr.length; i++) {
		url += (i === 0) ? '?' : '&'
		url += `startup_ids%5B%5D=${arr[i]}`
	}
	var reqBody = {
		url: url,
		headers: {
			Cookie: newCookie
		}					
	}
	request(reqBody, function(err, resp, body) {
		if (err) {
			console.log(err)
		} else {
			var $ = cheerio.load(body)
			var list = []
			$('.startup-link').each(function(i, elem) {
				list.push($(this).attr('href'))
			})
			for (var j = 0; j < list.length; j++) {
				request({
					url: list[j],
					headers: {
						'User-Agent': 'Brandon'
					}
				}, function(err, resp, body) {
					var $ = cheerio.load(body)
					var userList = [];
					$('.object-list-title').each(function(i, elem) {
						userList.push($(this).children()['0'].attribs.href)
					})
					for (var k = 0; k < userList.length; k++) {
						request({
							url: userList[k],
							headers: {
								'User-Agent': 'Brandon'
							}
						}, function(err, resp, body) {
							console.log($('.link_el fontello-linkedin'))
						})
					}
				})
			}
		}
	})
})
