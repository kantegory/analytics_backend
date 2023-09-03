import django_filters
from workprogramsapp.models import EvaluationTool


class EvaluationToolsBankFilterSet(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr="icontains")
    description = django_filters.CharFilter(lookup_expr="icontains")
    type = django_filters.CharFilter(lookup_expr="iexact")
    language = django_filters.CharFilter(field_name="evaluation_tools__work_program__language", lookup_expr="iexact")
    discipline_name = django_filters.CharFilter(field_name="evaluation_tools__work_program__title", lookup_expr="iexact")
    section_name = django_filters.CharFilter(field_name="evaluation_tools__name", lookup_expr="iexact")

    class Meta:
        model = EvaluationTool
        fields = [
            "name",
            "type",
            "description",
            "language",
            "discipline_name",
            "section_name"
        ]
