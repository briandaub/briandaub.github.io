var skills_obj = [
    {
      'title': 'HTML5',
      'xp': 8,
      'length': 9
    },
    {
      'title': 'CSS3',
      'xp': 7,
      'length': 9
    },
    {
      'title': 'Bootstrap',
      'xp': 5,
      'length': 9
    },
    {
      'title': 'JavaScript',
      'xp': 6,
      'length': 9
    },
    {
      'title': 'jQuery',
      'xp': 6,
      'length': 9
    },
    {
      'title': 'Git/GitHub',
      'xp': 7,
      'length': 9
    },
    {
      'title': 'Photoshop',
      'xp': 6,
      'length': 9
    },
    {
      'title': 'Illustrator',
      'xp': 4,
      'length': 9
    }
]

$(document).ready(function () {
    var list = $('.skill-list').html('<ul class="list-group"></ul>').find('ul');
    for(var i = 0; i < skills_obj.length; i++){
        list.append("<h3 class='bar-title'>" + skills_obj[i].title + "</h3>" + "<li class='bar-outter' >" + "<div class='bar-inner' data-percent='" + skills_obj[i].xp  + "0%' >" +  "</div>" + "</li>");  
    }
});