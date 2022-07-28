const Joi = require('joi');

const PlaylistsPayloadSchema = Joi.object({
  name: Joi.string().required(),
});

const SongsPlaylistPayloadSchema = Joi.object({
  songId: Joi.string().required(),
});

module.exports = { PlaylistsPayloadSchema, SongsPlaylistPayloadSchema };
