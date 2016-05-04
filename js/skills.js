var skills_obj = [
    {
      'title': 'HTML5',
      'xp': 7,
      'length': 9
    },
    {
      'title': 'CSS3',
      'xp': 6,
      'length': 9
    },
    {
      'title': 'Bootstrap',
      'xp': 6,
      'length': 9
    },
    {
      'title': 'JavaScript',
      'xp': 7,
      'length': 9
    },
    {
      'title': 'jQuery',
      'xp': 6,
      'length': 9
    },
    {
      'title': 'Git/GitHub',
      'xp': 6,
      'length': 9
    },
    {
      'title': 'Photoshop',
      'xp': 6,
      'length': 9
    },
    {
      'title': 'Illustrator',
      'xp': 6,
      'length': 9
    }
]

$(document).ready(function () {
    var list = $('.skills').html('<ul id="skill-list" class="list-group"></ul>').find('ul');
    for(var i = 0; i < skills_obj.length; i++){
        list.append("<li class='skill'>" + "<h3>" + skills_obj[i].title + "</h3>" + "<br />" +  "<div class='skill-bar'>" + "</div>" + "</li>");  
    }
});