var skills_obj = [
    {
      'id': 'html',
      'title': 'HTML5',
      'xp': 95,
    },
    {
      'id': 'css',
      'title': 'CSS3',
      'xp': 90,
    },
    {
      'id': 'bootstrap',
      'title': 'Bootstrap',
      'xp': 70,
    },
    {
      'id': 'js',
      'title': 'JavaScript',
      'xp': 75,
    },
    {
      'id': 'jquery',
      'title': 'jQuery',
      'xp': 75,
    },
    {
      'id': 'git',
      'title': 'Git/GitHub',
      'xp': 70,
    },
    {
      'id': 'ps',
      'title': 'Photoshop',
      'xp': 80,
    },
    {
      'id': 'is',
      'title': 'Illustrator',
      'xp': 60,
    }
]

$(document).ready(function () {
    var list = $('.skill-list').html('<ul class="list-group"></ul>').find('ul');
    for(var i = 0; i < skills_obj.length; i++){
        list.append("<li class='bar-outter' >" + "<div class='bar-inner "  + skills_obj[i].id + "' data-percent='" + skills_obj[i].xp  + "%' >" +  "</div>" + "</li>");
    }
});