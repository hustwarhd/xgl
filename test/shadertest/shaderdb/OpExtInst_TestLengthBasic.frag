#version 450 core

layout(location = 0) in vec4 a0;
layout(location = 0) out vec4 color;

void main()
{
    color = vec4(length(a0.x) + length(double(a0.x)));
}