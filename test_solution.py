import subprocess


solution_1 = """
function add(x, y) {
  return x - y;
}
"""

unit_tests = "unit_tests.js"



def create_solution_tests(solution, tests_file):
  with open('solution_tests.js', 'w') as f:
     f.write(solution)

  with open(tests_file, 'r') as tests_f:

    with open('solution_tests.js', 'a') as f:
        for line in tests_f:
            f.write(line)


def remove_solution_tests(file):
    subprocess.run(["rm", file])


def is_solution_correct(solution, test_file):
    create_solution_tests(solution, test_file)
    run_tests = subprocess.run(["nodejs", "solution_tests.js"])
    remove_solution_tests("solution_tests.js")
    return not run_tests.returncode


def main():
    print(is_solution_correct(solution_1, unit_tests))

if __name__ == "__main__":
    main()
    
