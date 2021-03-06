#version 450 core

layout(set = 0, binding = 0) uniform sampler2D samp2DS;
layout(location = 0) in vec3 inUV;
layout(location = 0) out vec4 oColor;

void main()
{
    oColor = textureProj(samp2DS, inUV, 1);
}

