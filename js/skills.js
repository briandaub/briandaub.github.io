var skills_obj = [
    {
      'id': 'html',
      'title': 'HTML5',
      'xp': 8,
      'length': 9
    },
    {
      'id': 'css',
      'title': 'CSS3',
      'xp': 7,
      'length': 9
    },
    {
      'id': 'bootstrap',
      'title': 'Bootstrap',
      'xp': 5,
      'length': 9
    },
    {
      'id': 'js',
      'title': 'JavaScript',
      'xp': 6,
      'length': 9
    },
    {
      'id': 'jquery',
      'title': 'jQuery',
      'xp': 6,
      'length': 9
    },
    {
      'id': 'git',
      'title': 'Git/GitHub',
      'xp': 7,
      'length': 9
    },
    {
      'id': 'ps',
      'title': 'Photoshop',
      'xp': 6,
      'length': 9
    },
    {
      'id': 'is',
      'title': 'Illustrator',
      'xp': 4,
      'length': 9
    }
]

$(document).ready(function () {
    var list = $('.skill-list').html('<ul class="list-group"></ul>').find('ul');
    for(var i = 0; i < skills_obj.length; i++){
        list.append("<li class='bar-outter' >" + "<div class='bar-inner "  + skills_obj[i].id + "' data-percent='" + skills_obj[i].xp  + "0%' >" +  "</div>" + "</li>");
    }
});