var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
         'article-one' : {
            title : 'Article one | Nishant Arora',
            heading : 'Article-one',
            date : 'Feb 8,2017',
            content: `
                    <p>
                        This is the content for my first article. This is the content for my first article.This is the content for my first article.
                        This is the content for my first article.This is the content for my first article.This is the content for my first article.
                     </p>
                    <p>
                        This is the content for my first article. This is the content for my first article.This is the content for my first article.
                        This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>
                    <p>
                        This is the content for my first article. This is the content for my first article.This is the content for my first article.
                        This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>
                    <p>
                        This is the content for my first article. This is the content for my first article.This is the content for my first article.
                        This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>`
                },
         'article-two' : {
            title : 'Article Two | Nishant Arora',
            heading : 'Article-Two',
            date : 'Feb 9,2017',
            content: `
                    <p>
                        This is the content for my Second article. 
                        
                     </p>`
                   
                },
         'article-three' : {
            title : 'Article Three | Nishant Arora',
            heading : 'Article-Two',
            date : 'Feb 11,2017',
            content: `
                    <p>
                        This is the content for my Third article. 
                    </p>`
                   
             },
};
        
        
function createTemplate(data) {
        var title = data.title
        var date = data.date
        var heading = data.heading
        var content = data.content
        var htmlTemplate = `
                <html>
            <head>
                <title>${title}</title>
                <meta name ="viewport" content="width=device-width,initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class = "container">
                <div>
                    <a href = "/">Home</a>
                </div>
                
                <h2>${heading}</h2>
                <div>
                ${date}
                </div>
                 <div>
                    ${content}            
                </div>
                </div>
            </body>
        </html>
        `;
        return htmlTemplate
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
