#version 450

layout(location = 0) in vec3 fragColor;
layout(location = 1) in vec2 fragTexCoords;
layout(location = 2) in vec2 fragNormals;

layout(location = 0) out vec4 outColor;

layout(set = 0, binding = 1) uniform sampler2D texture_image;


void main() {

    // Adding texture
    outColor = texture(texture_image, fragTexCoords);

}