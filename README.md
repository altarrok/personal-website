https://www.altaybatuhan.com

Personal Website written using Gatsby (React) 

Content is inside JSON files in /src/contents/

### Altarok

* Generating pages using Gatsby createPages API call.
* Page resources are in dir /src/contents/altarok/posts/
* Required fields for postX.json:
  * priority: Number => higher priority -> ends up before in sort. Increment by 10 since you may want to add more in between time to time. 
  * slug: String => altaybatuhan.com/{slug}
  * imageFileName: String => Image file name inside Gatsby's filesystem (include file extensions)
  * imageWidth: Number => Image Width (in px)
  * imageHeight: Number => Image Height (in px)
  * title: String => main title of the post
  * paragraphes: String[] => List of paragraphes to include in post
  
  
### Which tech did I like using

* GraphQL:heart: (Really convenient)
* Static site :running: Gatsby:heart: 
* Netlify:heart:

### What was hard

* Site generation. Absolutely painful. Had to use Gatsby's API and lots of boilerplate code.
* Image Placeholder & LazyLoading Images, using both at the same time can be mind boggling. 

^ both are trade-off losses, gain from performance and efficiency by static site generation means doing things dynamically is going to be hard.

### What to improve

* File structure, could be more clean. 
* Design:crying_cat_face:. Could be more elegant.
* Outsourcing images might make the code much less complicated.
* Self-documenting code, could use better JSX element names

#### TODO:

* allow images in between paragraphes. 
* add capability of adding videos in between paragraphes.






Using netlify for hosting & ImprovMX for email forwarding
