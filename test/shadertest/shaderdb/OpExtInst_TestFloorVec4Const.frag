#version 450 core

layout(location = 0) in vec4 a;
layout(location = 0) out vec4 frag_color;

void main()
{
    vec4 fv = floor(a);
    fv.x = floor(1.5);
    frag_color = fv;
}