import sys
from PyQt5.QtCore import Qt
from PyQt5.QtWidgets import (
    QApplication, QMainWindow, QStackedWidget, QWidget, QVBoxLayout,
    QHBoxLayout, QPushButton, QLabel, QListWidget, QFrame, QSizePolicy
)
from PyQt5.QtGui import QPalette, QColor


class DashboardPage(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout()
        layout.addWidget(QLabel("Welcome Administrator!"))
        layout.addWidget(QLabel("Academic Year: 2020-2021 1st Semester"))
        layout.addWidget(QLabel("Evaluation Status: On-going"))
        layout.addWidget(QLabel("1 Total Faculties"))
        layout.addWidget(QLabel("3 Total Students"))
        layout.addWidget(QLabel("1 Total Classes"))
        self.setLayout(layout)


class SubjectsPage(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout()
        layout.addWidget(QLabel("Subjects Content"))
        self.setLayout(layout)


class ClassesPage(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout()
        layout.addWidget(QLabel("Classes Content"))
        self.setLayout(layout)


class FacultyPage(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout()
        layout.addWidget(QLabel("Faculty Content"))
        self.setLayout(layout)


class StudentsPage(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout()
        layout.addWidget(QLabel("Students Content"))
        self.setLayout(layout)


class EvaluationReportPage(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout()
        layout.addWidget(QLabel("Evaluation Report Content"))
        self.setLayout(layout)


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle('Faculty Evaluation System')
        self.setGeometry(100, 100, 1000, 700)

        # Top blue bar
        top_bar = QFrame()
        top_bar.setStyleSheet("background-color: #007bff;")
        top_bar.setFixedHeight(50)
        top_bar.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Fixed)

        top_bar_layout = QHBoxLayout()
        top_bar_layout.addWidget(QLabel("Faculty Evaluation System", alignment=Qt.AlignCenter), alignment=Qt.AlignLeft)
        top_bar_layout.addStretch(1)
        top_bar_layout.addWidget(QLabel("Administrator", alignment=Qt.AlignRight), alignment=Qt.AlignRight)
        top_bar.setLayout(top_bar_layout)

        # Side menu
        side_menu = QListWidget()
        side_menu.addItem("Dashboard")
        side_menu.addItem("Subjects")
        side_menu.addItem("Classes")
        side_menu.addItem("Faculties")
        side_menu.addItem("Students")
        side_menu.addItem("Evaluation Report")
        side_menu.setFixedWidth(200)
        side_menu.setStyleSheet("""
            QListWidget {
                background-color: #343a40;
                color: white;
                font.setPointSize(16)
                self.label.setFont(font)
                self.label.move(50,20)
            }
            QListWidget::item:selected {
                background-color: #007bff;
            }
        """)
        side_menu.currentRowChanged.connect(self.display_page)

        # Pages
        self.pages = QStackedWidget()
        self.pages.addWidget(DashboardPage())
        self.pages.addWidget(SubjectsPage())
        self.pages.addWidget(ClassesPage())
        self.pages.addWidget(FacultyPage())
        self.pages.addWidget(StudentsPage())
        self.pages.addWidget(EvaluationReportPage())

        # Main layout
        main_layout = QHBoxLayout()
        main_layout.addWidget(side_menu)
        main_layout.addWidget(self.pages)

        # Central widget to contain everything
        main_widget = QWidget()
        central_layout = QVBoxLayout()
        central_layout.addWidget(top_bar)
        central_layout.addLayout(main_layout)
        main_widget.setLayout(central_layout)

        self.setCentralWidget(main_widget)

    def display_page(self, index):
        self.pages.setCurrentIndex(index)


if __name__ == "__main__":
    app = QApplication(sys.argv)

    # Setting app style
    palette = QPalette()
    palette.setColor(QPalette.Window, QColor(255, 255, 255))
    palette.setColor(QPalette.WindowText, Qt.black)
    app.setPalette(palette)

    window = MainWindow()
    window.show()

    sys.exit(app.exec_())
