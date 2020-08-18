import numpy as np

data_path = "input-6.txt"
grid_size = (1000, 1000)
# data_path = "test.txt"
# grid_size = (10, 10)


def clean_instructions(data_path):
    with open(data_path) as f:
        data = f.read().split("\n")

    instructions = []

    for line in data:
        line = line.replace(" through ", " ")
        if line.startswith("turn "):
            line = line.replace(" ", "_", 1)
        line = line.split(" ")

        instruction = {}
        instruction["power"] = line[0]
        start = line[1].split(",")
        stop = line[2].split(",")
        instruction["start"] = tuple([int(start[0]), int(start[1])])
        instruction["stop"] = tuple([int(stop[0]), int(stop[1])])
        instructions.append(instruction)

    return instructions


def turn_on_or_off(grid, x, y, power):
    if power == "toggle":
        if grid[x][y]:
            grid[x][y] = False
        else:
            grid[x][y] = True
    elif power == "turn_on":
        grid[x][y] = True
    elif power == "turn_off":
        grid[x][y] = False


def turn_up_or_down(grid, x, y, power):
    if power == "toggle":
        grid[x][y] += 2
    elif power == "turn_on":
        grid[x][y] += 1
    elif power == "turn_off":
        if grid[x][y] > 0:
            grid[x][y] -= 1


def solve():
    instructions = clean_instructions(data_path)
    grid = np.full(grid_size, 0, dtype=int)

    for instruction in instructions:
        start = instruction["start"]
        stop = instruction["stop"]

        for x in range(start[0], stop[0] + 1):
            for y in range(start[1], stop[1] + 1):
                # turn_on_or_off(grid, x, y, instruction["power"]) # <- q1 solution
                turn_up_or_down(grid, x, y, instruction["power"])  # <- q2 solution

    lights_on = 0

    for row in grid:
        for cell in row:
            lights_on += cell

    print("Lights on:", lights_on)


solve()
