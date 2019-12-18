'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', { //class called POST/ WE can create different objects
    from: DataTypes.STRING, //column called from
    title: DataTypes.STRING, //column called title
    full_text: DataTypes.TEXT, //column full_text
    media_url: DataTypes.STRING//column media_url
  }, {
    tableName: 'posts',
    underscored: true
  });
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};
