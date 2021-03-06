#version 450

layout(binding = 0) uniform Uniforms
{
    float f1_1;

    vec3 f3_1, f3_2;
    vec4 f4_1;
};

layout(location = 0) out vec4 fragColor;

void main()
{
    vec3 f3_0 = step(f3_1, f3_2);

    vec4 f4_0 = step(f1_1, f4_1);

    fragColor = (f3_0.y == f4_0.x) ? vec4(0.0) : vec4(1.0);
}